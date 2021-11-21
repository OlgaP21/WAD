import { createStore } from "vuex";

export default createStore({
  state: {
    contactsList:[
      {id: 1, name: "Name1", email: "Email1", telephone: "56247312"},
      {id: 2, name: "Name2", email: "Email2", telephone: "53697201"}
  ],
    postsList:[
        {
            "id": 1,
            "creationTime": "Sep 18, 2020 15:16",
            "authorName": "John Smith",
            "authorEmail":  "John.Smith@example.com",
            "bodyOfPost": "I think it is going to rain",
            "pathToFacePicture": "@assets/face.png",
            "pathToBodyPicture": "@assets/image1.jpg",
            "classOfPicture": "big",
            "classOfButton": "like",
            "numberOfLikes": 10
        },
        {
            "id": 2,
            "creationTime": "Sep 18, 2020 15:16",
            "authorName": "John Smith",
            "authorEmail":  "John.Smith@example.com",
            "bodyOfPost": "Which weighs more, a pound of feathers or a pound of bricks?",
            "pathToFacePicture": "../assets/face.png",
            "pathToBodyPicture": null,
            "classOfPicture": "big",
            "classOfButton": "like",
            "numberOfLikes": 20
        },
        {
            "id": 3,
            "creationTime": "Sep 18, 2020 17:18",
            "authorName": "John Smith",
            "authorEmail":  "John.Smith@example.com",
            "bodyOfPost": "Felt cute, might delete later",
            "pathToFacePicture": "../assets/face.png",
            "pathToBodyPicture": "../assets/image2.jpg",
            "classOfPicture": "big",
            "classOfButton": "like",
            "numberOfLikes": 45
        },
        {
            "id": 4,
            "creationTime": "Sep 15, 2020 16:17",
            "authorName": "John Doe",
            "authorEmail":  "John.Doe@example.com",
            "bodyOfPost": "Lorem ipsum fortuna adjucas",
            "pathToFacePicture": "../assets/face.png",
            "pathToBodyPicture": null,
            "classOfPicture": "big",
            "classOfButton": "like",
            "numberOfLikes": 13
        },
        {
            "id": 5,
            "creationTime": "Sep 14, 2020 15:16",
            "authorName": "Jeff Bezos",
            "authorEmail":  "jbezzy@example.com",
            "bodyOfPost": "I am not a lizardhuman",
            "pathToFacePicture": "../assets/face.png",
            "pathToBodyPicture": null,
            "classOfPicture": "big",
            "classOfButton": "like",
            "numberOfLikes": 12
        },
        {
            "id": 6,
            "creationTime": "Sep 13, 2020 21:53",
            "authorName": "Jimi Hendrix",
            "authorEmail":  "JHix@example.com",
            "bodyOfPost": "All Along the Watchtower",
            "pathToFacePicture": "../assets/face.png",
            "pathToBodyPicture": null,
            "classOfPicture": "big",
            "classOfButton": "like",
            "numberOfLikes": 3
        },
        {
            "id": 7,
            "creationTime": "Sep 10, 2020 11:27",
            "authorName": "Giannis Antetokounmpo",
            "authorEmail":  "BigGreek@example.com",
            "bodyOfPost": "Lorem Ipsum rule the paintum",
            "pathToFacePicture": "../assets/face.png",
            "pathToBodyPicture": null,
            "classOfPicture": "big",
            "classOfButton": "like",
            "numberOfLikes": 74
        },
        {
            "id": 8,
            "creationTime": "Sep 10, 2020 09:33",
            "authorName": "Vladimir Putin",
            "authorEmail":  "poloniumtea@example.com",
            "bodyOfPost": "Rumors of my death have been greatly exaggerated",
            "pathToFacePicture": "../assets/face.png",
            "pathToBodyPicture": null,
            "classOfPicture": "big",
            "classOfButton": "like",
            "numberOfLikes": 56
        },
        {
            "id": 9,
            "creationTime": "Sep 7, 2020 03:52",
            "authorName": "Comrade Dyatlov",
            "authorEmail":  "whatdoesthedosimetersay@example.com",
            "bodyOfPost": "3.6 Roentgen, not great, not terrible.",
            "pathToFacePicture": "../assets/face.png",
            "pathToBodyPicture": null,
            "classOfPicture": "big",
            "classOfButton": "like",
            "numberOfLikes": 2
        },
        {
            "id": 10,
            "creationTime": "Sep 7, 2020 04:44",
            "authorName": "General Pikalov",
            "authorEmail":  "doitmyself@example.com",
            "bodyOfPost": "It's not 3 Roentgen, it's 15 000.",
            "pathToFacePicture": "../assets/face.png",
            "pathToBodyPicture": null,
            "classOfPicture": "big",
            "classOfButton": "like",
            "numberOfLikes": 8
        }
    ]
  },
  mutations: {
    PlusLike: state => {
      state.postsList.forEach(post => {
        post.numberOfLikes += 1;
      })
    },
    ResetLikes: state => {
      state.postsList.forEach(post => {
        post.numberOfLikes = 1;
      })
    }
  },
  actions: {},
  modules: {},
});
