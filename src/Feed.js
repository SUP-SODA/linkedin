import React from "react";
import "./Feed.css";
import { auth, db } from "./firebase";
import InputOption from "./InputOption.js";
import Post from "./Post.js";

import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions"
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";


export default function Feed() {
  const [posts, setPosts] = React.useState([]);
  const [input, setInput] = React.useState("");

  React.useEffect(() => {
    db.collection("posts")
      .onSnapshot((snapshot) => {
        setPosts(snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data()
        }))
        )
      })
  }, [])

  function sendPost(e) {
    e.preventDefault();
    db.collection("posts").add({
      name: "Sahil Kumar Jamwal",
      description: "This is a test",
      message: { input },
      photoUrl: "",
    })
    setInput("");
  }

  return (
    <div className="feed">

      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />

          <form>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              type="text" />
            <button onClick={sendPost} type="submit">Send</button>
          </form>

        </div>
        <div className="feed_inputOption">
          <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E" />
        </div>
      </div>



      {posts.map((post) => (
        <Post
          key={post.id}
          name={post.data.name}
          description={post.data.description}
          message={post.data.message.input}
          photoUrl={post.data.photoUrl}
        />
      ))}

    </div>
  )
}