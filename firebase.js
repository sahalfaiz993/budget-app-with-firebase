
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getFirestore,collection, addDoc,deleteDoc, updateDoc ,onSnapshot,doc, getDocs } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAe0es5hJ9BiX1uMsol3cG0Hhn67Kq6orQ",
  authDomain: "budget-app-fb9d8.firebaseapp.com",
  projectId: "budget-app-fb9d8",
  storageBucket: "budget-app-fb9d8.appspot.com",
  messagingSenderId: "1078948763785",
  appId: "1:1078948763785:web:861ebc44f2b5198009ce58"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


var btn = document.getElementById("btn");
        btn.addEventListener("click", async() => {

              
            var income = document.getElementById("total-income-input").value;
            var expenses = document.getElementById("total-expenses-input").value;
            // var amount = document.getElementById("amount").value;
            var description = document.getElementById("description").value
            
            // const docRef  =  await setDoc(collection(db, "user"), data){
                try {
                    const docRef = await addDoc(collection(db, "user"), {
                        income:income,
                        expenses:expenses,
                    //  amount:amount,
                    description:description,
                    });
                    console.log("Document written with ID: ", docRef.id);
                  } catch (e) {
                    console.error("Error adding document: ", e);
                  }
               
            })
           
      
            async function show(){
              var red=document.getElementById('read');
              const querySnapshot = await getDocs(collection(db, "user"));
              querySnapshot.forEach((doc) => {
          
                console.log(doc.data());
                  red.innerHTML+=`
                  <div id="${doc.id}">
                  <p id="name">${doc.data().expenses}</p>
                  <p id="name2">${doc.data().income}</p>
                  <p id="name3">${doc.data().description}</p>
      
            <div><button id="update" onclick="edit(this,'${doc.id}')" >Update</button></div>
            <div><button  id="delete"  onclick="del('${doc.id}')" >Delete</button></div>
            </div>
            
            `      
                  if (doc.type=="removed") {
                    document.getElementById(doc.id).remove()
                  }
                 else if(doc.type==="added"){
              
                    red.innerHTML+=`
                    <div id="${doc.id}">
                    <p id="name">${doc.data().expenses}</p>
                    <p id="name">${doc.data().income}</p>
                    <p id="name">${doc.data().description}</p>

              <div><button id="update" onclick="edit(this,'${doc.id}')" >Update</button></div>
              <div><button  id="delete"  onclick="del('${doc.id}')" >Delete</button></div>
              </div>
              
              `
              }
              
               });
                };
              
               show()
              
              
        
              
              window.edit=async(h,id)=>{
                console.log(id);
                var user=prompt("enter ur value")
              h.parentNode.parentNode.childNodes[1].innerHTML=user;
                await updateDoc(doc(db, "user",id), {
                  description:user,
                  income:user,
                  expenses:user
                });
              }
              
              
              
              window.del=async(id)=>{
                alert("hi")
              
                await deleteDoc(doc(db, "user", id));
                location.reload();
              }


            
  




