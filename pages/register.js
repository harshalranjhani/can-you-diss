import { useState, useRef, useId } from "react";
import { useRouter } from "next/router";

import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import Image from "next/image";
import Link from "next/link";

import { auth, db, storage } from "../utils/firebase";
import firebase from "firebase/compat/app";
import { v4 } from "uuid";
import "firebase/storage";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function SignUp() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileImageFile, setProfileImageFile] = useState();
  const [profileImageToShow, setProfileImageShow] = useState();
  const pictureInputRef = useRef();
  const router = useRouter();
  const [authUser, setAuthUser] = useState();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        const storageRef = ref(
          storage,
          `profileImages/${profileImageFile.name} + ${v4()}`
        );
        const uploadTask = uploadBytesResumable(storageRef, profileImageFile);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
            }
          },
          (error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
              case "storage/unauthorized":
                // User doesn't have permission to access the object
                break;
              case "storage/canceled":
                // User canceled the upload
                break;

              // ...

              case "storage/unknown":
                // Unknown error occurred, inspect error.serverResponse
                break;
            }
          },
          () => {
            // Upload completed successfully, now we can get the download URL
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log("File available at", downloadURL);
              authUser.user.updateProfile({
                photoURL: downloadURL,
              });
              const uid = authUser.user.uid;
              const userDocRef = db.collection("users").doc(uid);
              userDocRef
                .set({
                  profileImage: downloadURL,
                })
                .then(() => {
                  const uid = authUser.user.uid;
                  const userDocRef = db.collection("users").doc(uid);
                  userDocRef.update({
                    displayName: name,
                    username: username,
                    loser: false,
                    wins: 0,
                    losses: 0,
                    challengesAccepted: 0,
                    challengesRejected: 0,
                    winnerBadgesEarned: 0,
                    loserBadgesEarned: 0,
                    email: email,
                  });
                  authUser.user.updateProfile({
                    displayName: name,
                  });
                });
            });
          }
        );
      })
      .then(() => {
        console.log("success!");
        router.replace("/");
        alert("Welcome User!");
      })
      .catch((e) => alert(e.message));
  };
  return (
    // <div className="h-screen w-screen flex flex-col justify-center items-center">
    //   <div className="border-2 border-border-gray p-8 rounded-lg space-y-2">
    //     <h1 className="text-3xl font-black ">Can You Diss</h1>
    //     <form className="flex flex-col">
    //       <label>E-Mail</label>
    //       <input
    //         type="email"
    //         className="input"
    //         onChange={(evt) => {
    //           setEmail(evt.target.value);
    //         }}
    //       />
    //       <label>Password</label>
    //       <input
    //         type="password"
    //         className="input"
    //         onChange={(evt) => {
    //           setPassword(evt.target.value);
    //         }}
    //       />
    //     </form>
    //     <div>
    //       <Link href="/register">
    //         <button className="button" onClick={handleSubmit}>
    //           Login
    //         </button>
    //       </Link>
    //     </div>

    //     <div>
    //       <p>Dont have an Account?</p>
    //       <Link href="/register">Register</Link>
    //     </div>
    //   </div>
    // </div>

    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="w-[300px] lg:w-[350px]">
        <div>
          <h1 className="text-3xl font-extrabold">Can You Diss</h1>
        </div>
        <form className="flex flex-col">
          <label>Name</label>
          <input
            type="text"
            name="Name"
            className="input"
            onChange={(evt) => {
              setName(evt.target.value);
            }}
          />
          <label>Username</label>
          <input
            type="text"
            name="Username"
            className="input"
            onChange={(evt) => {
              setUsername(evt.target.value);
            }}
          />
          <label>E-Mail</label>
          <input
            type="email"
            name="email"
            className="input"
            onChange={(evt) => {
              setEmail(evt.target.value);
            }}
          />
          <label>Password</label>
          <input
            type="password"
            name="Password"
            className="input"
            onChange={(evt) => {
              setPassword(evt.target.value);
            }}
          />
          <div
            className="flex space-x-2 cursor-pointer"
            onClick={() => {
              pictureInputRef.current.click();
            }}
          >
            <span>Profile Picture</span>
            <div>
              <InsertPhotoOutlinedIcon sx={{ fontSize: "26px" }} />
            </div>
          </div>
          {profileImageToShow ? (
            <span
              className="text-red-600 underline cursor-pointer"
              onClick={() => {
                setProfileImageFile(null);
              }}
            >
              Remove
            </span>
          ) : null}
          <input
            type="file"
            name="Profile Picture"
            onChange={(evt) => {
              const fileReader = new FileReader();
              if (evt.target.files) {
                fileReader.readAsDataURL(evt.target.files[0]);
              }
              fileReader.onload = (readerEvt) => {
                console.log(readerEvt.target?.result);
                setProfileImageShow(readerEvt.target?.result);
              };
              setProfileImageFile(evt.target.files[0]);
            }}
            ref={pictureInputRef}
            hidden
          />
          <button
            className="button mb-2"
            onClick={(evt) => {
              handleSubmit(evt);
            }}
          >
            Register
          </button>
          <Link href={"/login"} className="text-twit-blue underline">
            Already have an Account?
          </Link>
          {profileImageToShow ? (
            <div className="absolute">
              <Image
                alt={username}
                src={profileImageToShow}
                className="opacity-80 hover:opacity-50 transition-all duration-300 object-contain"
                width={250}
                height={250}
              />
            </div>
          ) : null}
        </form>
      </div>
    </div>

    // <ThemeProvider theme={theme}>
    //   <Container component="main" maxWidth="xs">
    //     <CssBaseline />
    //     <Box
    //       sx={{
    //         marginTop: 8,
    //         display: "flex",
    //         flexDirection: "column",
    //         alignItems: "center",
    //       }}
    //     >
    //       <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
    //         <HowToRegIcon />
    //       </Avatar>
    //       <Typography component="h1" variant="h5">
    //         Sign up
    //       </Typography>
    //       <Box component="div" noValidate sx={{ mt: 3 }}>
    //         <Grid container spacing={2}>
    //           <Grid item xs={12} sm={6}>
    //             <TextField
    //               autoComplete="given-name"
    //               name="firstName"
    //               required
    //               fullWidth
    //               id="firstName"
    //               label="First Name"
    //               autoFocus
    //               onChange={(evt) => {
    //                 setFirstName(evt.target.value);
    //               }}
    //             />
    //           </Grid>
    //           <Grid item xs={12} sm={6}>
    //             <TextField
    //               required
    //               fullWidth
    //               id="lastName"
    //               label="Last Name"
    //               name="lastName"
    //               autoComplete="family-name"
    //               onChange={(evt) => {
    //                 setLastName(evt.target.value);
    //               }}
    //             />
    //           </Grid>
    //           <Grid item xs={12}>
    //             <TextField
    //               required
    //               fullWidth
    //               id="email"
    //               label="Email Address"
    //               name="email"
    //               autoComplete="email"
    //               onChange={(evt) => {
    //                 setEmail(evt.target.value);
    //               }}
    //             />
    //           </Grid>
    //           <Grid item xs={12}>
    //             <TextField
    //               required
    //               fullWidth
    //               name="password"
    //               label="Password"
    //               type="password"
    //               id="password"
    //               autoComplete="new-password"
    //               onChange={(evt) => {
    //                 setPassword(evt.target.value);
    //               }}
    //             />
    //           </Grid>
    //           <Grid item xs={12}>
    //             <FormControlLabel
    //               control={
    //                 <Checkbox value="allowExtraEmails" color="primary" />
    //               }
    //               label="I want to receive inspiration, marketing promotions and updates via email."
    //             />
    //           </Grid>
    //         </Grid>
    //         <Button
    //           type="submit"
    //           fullWidth
    //           variant="outlined"
    //           onClick={handleSubmit}
    //           sx={{ mt: 3, mb: 2 }}
    //         >
    //           Sign Up
    //         </Button>
    //         <Grid container justifyContent="flex-end">
    //           <Grid item>
    //             <Link href="/login">Already have an account? Sign in</Link>
    //           </Grid>
    //         </Grid>
    //       </Box>
    //     </Box>
    //   </Container>
    // </ThemeProvider>
  );
}
