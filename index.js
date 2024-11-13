// Import stylesheets
import "./style.css"
import liff from "@line/liff"
// Body element
const body = document.getElementById('body')

// Button elements
const btnSend = document.getElementById("btnSend")
const btnClose = document.getElementById("btnClose")
const btnShare = document.getElementById("btnShare")
const btnLogIn = document.getElementById("btnLogIn")
const btnLogOut = document.getElementById("btnLogOut")
const btnScanCode = document.getElementById("btnScanCode")
const btnOpenWindow = document.getElementById("btnOpenWindow")

// Profile elements
const email = document.getElementById("email")
const userId = document.getElementById("userId")
const pictureUrl = document.getElementById("pictureUrl")
const displayName = document.getElementById("displayName")
const statusMessage = document.getElementById("statusMessage")

// QR element
const code = document.getElementById("code")
const friendShip = document.getElementById("friendShip")

async function main() {
  liff.ready.then(() => {
    //body.style.backgroundColor = "#888888"
    if (liff.isInClient()){
      getUserProfile()
    }     
    btnShare.style.display = "block"
  })
  // Initialize LIFF app)
  await liff.init({ liffId: "2006561849-4dPyGReE" })
  
  
}
main()

async function getUserProfile() {
  const profile = await liff.getProfile()
  pictureUrl.src = profile.pictureUrl
  userId.innerHTML = "<b>userId:</b> " + profile.userId
  statusMessage.innerHTML = "<b>statusMessage:</b> " + profile.statusMessage
  displayName.innerHTML = "<b>displayName:</b> " + profile.displayName
  
}

async function shareMsg() {
  const result = await liff.shareTargetPicker([
    {
      type: "text",
      text: "This msg was shared by LIFF"
    }
  ])
  if (result) {
    alert("Msg was shared!")
  } else {
    alert("shareTargetPicker was cancelled by user")
  }
  liff.closeWindow()
}
btnShare.onclick = () => {
  shareMsg()
}
/*async function main() {
  // ...
  if (!liff.isInClient()) {
    btnLogIn.style.display = "block"
    btnLogOut.style.display = "block"
  }
}

btnLogIn.onclick = () => {
  liff.login()
}

btnLogOut.onclick = () => {
  liff.logout()
  window.location.reload()
}*/