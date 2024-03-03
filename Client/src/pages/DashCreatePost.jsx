import { Alert, Button, FileInput, Select, TextInput } from "flowbite-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "../firebase";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function CreatePost() {
  const [file, setFile] = useState(null);
  const [imageFileUploadProgress, setImageFileUploadProgess] = useState(null);
  const [imageFileUploadError, setImageFileUploadError] = useState(null);
  const [publishError, setPublishError] = useState(null)
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const handleUploadImage = async () => {
    try {
      if (!file) {
        setImageFileUploadError("Please select an image");
        return;
      }
      setImageFileUploadError(null);
      const storage = getStorage(app);
      const fileName = new Date().getTime() + "-" + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapShot) => {
          const progess =
            (snapShot.bytesTransferred / snapShot.totalBytes) * 100;

          setImageFileUploadProgess(progess.toFixed(0));
        },
        (error) => {
          setImageFileUploadError("Image upload fail");
          setImageFileUploadProgess(null);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageFileUploadError(null);
            setImageFileUploadProgess(null);
            setFormData({ ...formData, image: downloadURL });
          });
        }
      );
    } catch (error) {
      setImageFileUploadError("Image upload fail");
      setImageFileUploadProgess(null);
      console.log(error);
    }
  };

  const  handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      const res = await fetch('/api/post/create',{
        method: 'POST',
        headers: {'Content-Type' : 'application/json',
      },
        body: JSON.stringify(formData),
      });
    const data = await res.json(); 
    if(!res.ok){
      setPublishError(data.message);
      return
    }
    if (res.ok){
      setPublishError(null);
      navigate(`/post/${data.slug}`)
    }
  }catch (error){
setPublishError("Someting went wrong")
  }
};
  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Create a post</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            className="flex-1"
            type="text"
            required
            id="title"
            placeholder="Title"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <Select
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            <option value="uncategorized">Select a category</option>
            <option value="job">Jobs</option>
            <option value="startup">Start-Up</option>
            <option value="top">Top</option>
          </Select>
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-teal-600 border-dotted p-3">
          <FileInput
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <Button
            type="button"
            outline
            size="sm"
            color="purple"
            onClick={handleUploadImage}
            disabled={imageFileUploadProgress}
          >
            {imageFileUploadProgress ? (
              <div className="w-16 h-16">
                <CircularProgressbar
                  value={imageFileUploadProgress}
                  text={`${imageFileUploadProgress || 0}%`}
                />
              </div>
            ) : (
              "Upload image"
            )}
          </Button>
        </div>
        {imageFileUploadError && (
          <Alert color="failure"> {imageFileUploadError}</Alert>
        )}
        {formData.image && (
          <img
            src={formData.image}
            alt="upload"
            className="w-full h-72 object-cover"
          />
        )}
        <ReactQuill
          theme="snow"
          className="h-72 mb-12"
          placeholder="Write a post"  
          required
          onChange={(value) =>{
            setFormData({...formData, content: value});
          }}
        />
        <Button type="submit" color="purple" outline>
          Publish
        </Button>
        {
          publishError && <Alert color="failure">{publishError}</Alert>
        }
      </form>
    </div>
  );
}

