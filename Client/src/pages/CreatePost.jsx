import { Button, FileInput, Select, TextInput } from "flowbite-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import React from "react";

export default function CreatePost() {
  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Create a post</h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            className="flex-1"
            type="text"
            required
            id="title"
            placeholder="Title"
          />
          <Select>
            <option value="uncategorized">Select a category</option>
            <option value="job">Jobs</option>
            <option value="startup">Start-Up</option>
            <option value="top">Top</option>
          </Select>
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-teal-600 border-dotted p-3">
          <FileInput type="file" accept="image/*" />
          <Button type="button" outline size="sm" color="purple">
            Upload image
          </Button>
        </div>
        <ReactQuill
          theme="snow"
          placeholder="Write a post"
          className="h-72 mb-12"
          required
        />
        <Button type="submit" color="purple" outline>
          Publish
        </Button>
      </form>
    </div>
  );
}
