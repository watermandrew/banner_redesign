
import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyC4_svEvKmxoiRxE1YVQFGiS_YkokzaMSg',
  authDomain: 'banner-67538.firebaseapp.com',
  databaseURL: 'https://banner-67538.firebaseio.com',
  projectId: 'banner-67538',
  storageBucket: 'banner-67538.appspot.com',
  messagingSenderId: '51713263068',
};
firebase.initializeApp(config);
const db = firebase.database();

export function fetchAllLinks(callback) {
  db.ref('links').on('value', (snapshot) => {
    callback(snapshot.val());
  });
}

export function fetchCategories(callback) {
  db.ref('categories').on('value', (snapshot) => {
    console.log(`in fetchCategories, snapshot.val() is ${snapshot.val()}`);
    callback(snapshot.val());
  });
}


export function createCategory(cat) {
  const key = db.ref().child('categories').push().key;

  db.ref(`categories/${key}`).set({
    title: cat.title,
    catLinks: cat.links,
  });
}


export function updateTitle(id, newTitle) {
  db.ref('categories').child(id).update({ title: newTitle });
}

export function updateLinks(id, newLinks) {
  console.log(`newLinks are ${newLinks}`);
  db.ref('categories').child(id).update({ catLinks: newLinks });
}


export function deleteCategory(id) {
  db.ref('categories').child(id).remove();
}
