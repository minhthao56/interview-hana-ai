import React from "react";
import { useForm } from "react-hook-form";

import infoAIP from "../../api/infoAIP";

import "./addData.scss";

export default function AddFeature() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    infoAIP.postFeature(data).then((res) => {
      console.log(res);
      e.target.reset();
    });
  };
  return (
    <div className="container-add">
      <h3>Info AddFeature</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input type="text" name="title" ref={register} placeholder="title" />
        </div>
        <div>
          <input
            type="text"
            name="content"
            ref={register}
            placeholder="content"
          />
        </div>
        <div>
          <input type="text" name="url" ref={register} placeholder="url" />
        </div>
        <button type="submit" style={{ cursor: "pointer" }}>
          Submit
        </button>
      </form>
    </div>
  );
}
