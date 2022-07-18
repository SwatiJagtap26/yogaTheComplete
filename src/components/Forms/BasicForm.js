import { useForm } from "react-hook-form";
import { useRef } from "react";
import "./BasicForm.css";

function BasicForm() {
  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const phoneInputRef = useRef();
  const msgInputRef = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
    alert("Data successfully submitted!")

    // const enteredName = nameInputRef.current.value;
    // const enteredEmail = emailInputRef.current.value;
    // const enteredAge = ageInputRef.current.value;
    // const enteredPhone = phoneInputRef.current.value;
    // const enteredmessage = msgInputRef.current.value;
    fetch("https://yoga--asanas-poc-default-rtdb.firebaseio.com/signup.json", {
      method: "POST",
      body: JSON.stringify(data, {
        name: "",
        age: "",
        email: "",
        phone: "",
        message: "",
      }),
    });
  };

  // console.log(errors.name)

  return (
    <div className="form-container">
      <div className="form-main1">
        <div className="basicForm-contain-size">
          <h1>Give your valuable Feedback!</h1>
          <p></p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="basicForm-control">
            <div>
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  ref={nameInputRef}
                  className={`form-control ${errors.name && "invalid"}`}
                  {...register("name", {
                    required: "Name is Required",
                    pattern: {
                      value: /[A-Za-z]{1}/,
                      message: "Only text are allowed",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("name");
                  }}
                />
                {errors.name && <small>{errors.name.message}</small>}
              </div>
              <div>
                <label>Age:</label>
                <input
                  type="text"
                  ref={ageInputRef}
                  className={`form-control ${errors.age && "invalid"}`}
                  {...register("age", {
                    required: "Age is Required",
                    min: {
                      value: 13,
                      message: "Minimum Required age is 13",
                    },
                    max: {
                      value: 65,
                      message: "Maximum allowed age is 65",
                    },
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "Only numbers are allowed",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("age");
                  }}
                />
                {errors.age && <small>{errors.age.message}</small>}
              </div>
              <div>
                <label>Email:</label>
                <input
                  type="text"
                  ref={emailInputRef}
                  className={`form-control ${errors.email && "invalid"}`}
                  {...register("email", {
                    required: "Email is Required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("email");
                  }}
                />
                {errors.email && <small>{errors.email.message}</small>}
              </div>
              <div>
                <label>Phone:</label>
                <input
                  type="text"
                  ref={phoneInputRef}
                  className={`form-control ${errors.phone && "invalid"}`}
                  {...register("phone", {
                    required: "Phone is Required",
                    pattern: {
                      value:
                        /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                      message: "Invalid phone no",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("phone");
                  }}
                />
                {errors.phone && <small>{errors.phone.message}</small>}
              </div>
              <div>
                <label>Message:</label>
                <textarea
                  ref={msgInputRef}
                  className={`form-control ${errors.message && "invalid"}`}
                  {...register("message", {
                    required: "Message is Required",
                    minLength: {
                      value: 10,
                      message: "Minimum Required length is 10",
                    },
                    maxLength: {
                      value: 50,
                      message: "Maximum allowed length is 50 ",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("message");
                  }}
                ></textarea>
                {errors.message && <small>{errors.message.message}</small>}
              </div>
            </div>
          </div>
          <input
            type="submit"
            className="btn btn-primary my-3 form-button"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
}

export default BasicForm;
