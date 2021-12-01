const LinksSocialMedia = {
  github: 'pixelrgb255',
  facebook: 'marcel.diniz.923',
  linkedin: 'in/marcel-diniz-82bb13149'
}

function changeSocialMedialLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }

  //document.getElementById('userName').textContent = 'Marcelo'
  // userName.textContent = 'Marcelo' //simplified version
}

changeSocialMedialLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.getElementById('userName').textContent = data.name
      document.getElementById('userBio').textContent = data.bio
      document.getElementById('userLink').href = data.html_url
      document.getElementById('userImage').src = data.avatar_url
      document.getElementById('userLogin').textContent = data.login
    })
}

getGitHubProfileInfos()
