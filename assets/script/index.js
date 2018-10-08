// alert(0)
$('body').scrollspy({
  target: '.scrollspy'
});

function _(element) {
  return document.getElementById(element)
}
new WOW().init();
// object-fit polyfill run
objectFitImages();

/* init Jarallax */
jarallax(document.querySelectorAll('.jarallax'));

jarallax(document.querySelectorAll('.jarallax-keep-img'), {
    keepImg: true,
});

//google maps api function  
var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map-box'), {
    center: {
      lat: 10.761089,
      lng: 79.118668
    },
    zoom: 8
  });
}



//leave message handling


_('leave-message').addEventListener("submit", event => {
  _("leave-button").setAttribute("disabled", true)
  _("leave-button").innerHTML = `<i class="fas fa-spinner fa-spin text-whitesa"></i>&nbsp;submitting`
  event.preventDefault()
  console.log(event)
  console.log(event.target.elements[0].value)
  let name = event.target.elements["leave-name"].value
  let email = event.target.elements["leave-email"].value
  let organisation = event.target.elements["leave-organisation"].value
  let location = event.target.elements["leave-location"].value
  let contact = event.target.elements["leave-contact"].value
  let message = event.target.elements["leave-message"].value

  console.log(name, email, organisation, contact, location, message)

  const apiUrl = `../../restapi/leavemessage.php?name=${name}&email=${email}&organisation=${organisation}&contact=${contact}&location=${location}&message=${message}`
  console.log(apiUrl)
  fetch(apiUrl)
    .then(resp => resp.json())
    .then(response => {
      console.log(response)
      if (response.status) {
        _("leave-button").classList.remove("btn-primary")
        _("leave-button").classList.add("btn-success")
        _("leave-button").innerHTML = `submitted`
        setTimeout(function () {
          _("leave-message").reset()
          _("leave-button").removeAttribute("disabled")
          _("leave-button").innerHTML = `submit`
          _("leave-button").classList.remove("btn-success")
          _("leave-button").classList.add("btn-primary")
        }, 2000)
      }
    })
    .catch(error => console.log(error))

})



//career form handler

_('career-form').addEventListener("submit", event => {
  _("career-button").setAttribute("disabled", true)
  _("career-button").innerHTML = `<i class="fas fa-spinner fa-spin text-whitesa"></i>&nbsp;submitting`
  event.preventDefault()
  console.log(event)
  // console.log(event.target.elements[0].value)
  let name = event.target.elements["uname"].value
  let mname = event.target.elements["mname"].value
  let fname = event.target.elements["fname"].value
  let sex = event.target.elements["gender"].value
  let date = event.target.elements["dob"].value
  let relegion = event.target.elements["relegion"].value
  let community = event.target.elements["community"].value
  let marital = event.target.elements["marital"].value
  let blood = event.target.elements["blood"].value
  let education = event.target.elements["education"].value
  let occupation = event.target.elements["occupation"].value
  let contact1 = event.target.elements["mobile1"].value
  let contact2 = event.target.elements["mobile2"].value
  let mail = event.target.elements["email"].value
  let address = event.target.elements["address-text"].value
  let district = event.target.elements["district"].value
  let state = event.target.elements["state"].value
  let country = event.target.elements["country"].value
  let pincode = event.target.elements["pincode"].value


  console.log(name, mname, fname, sex, date, relegion, community, marital, blood, education, occupation, contact1, contact2, mail, address, district, state, country, pincode)
  const apiUrl = `../../restapi/career.php?name=${name}&mname=${mname}&fname=${fname}&sex=${sex}&date=${date}&relegion=${relegion}&community=${community}&marital=${marital}&blood=${blood}&education=${education}&occupation=${occupation}&contact1=${contact1}&contact2=${contact2}&mail=${mail}&address=${address}&district=${district}&state=${state}&country=${country}&pincode=${pincode}`
  console.log(apiUrl)
  fetch(apiUrl)
    .then(resp => resp.json())
    .then(response => {
      console.log(response)
      if (response.status) {
        _("career-button").classList.remove("btn-primary")
        _("career-button").classList.add("btn-success")
        _("career-button").innerHTML = `submitted`
        setTimeout(function () {
          _("career-form").reset()
          _("career-button").removeAttribute("disabled")
          _("career-button").innerHTML = `submit`
          _("career-button").classList.remove("btn-success")
          _("career-button").classList.add("btn-primary")
          $("#modalContactForm").modal("hide")
        }, 3000)
      }
    })
    .catch(error => console.log(error))

})