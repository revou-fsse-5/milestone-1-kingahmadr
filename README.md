# Milestone 1: Building Company Profile Site

![Website Hero Preview](/readme-img/2024-07-11_13-52.png "Website Hero Preview")

<p>👋 Hi there! I'm a Ahmad Naufal delighted to present my latest poject.
I designed the Gym company profile named "Gold Gym Fitness".
Featuring a sleek layout and a comprehensive overview of our state-of-the-art facilities and services, this profile focuses on delivering member satisfaction through a knowledgeable staff and a commitment to excellence. We offer a diverse range of fitness programs and amenities, maintaining the highest standards of quality and performance. I hope you enjoy exploring it!

I am dedicated to keeping up with industry trends and utilizing the latest tools to create innovative solutions that exceed expectations. Interested in collaborating? Connect with me on:
🚀</p>

[![ahmadnromiz@gmail.com][1.1]][1]
[![Ahmad Naufal Romiz][2.1]][2]


[1.1]: https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white 
[2.1]: https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white

[1]: mailto:ahmadnromiz@gmail.com
[2]: https://www.linkedin.com/in/ahmadnromiz/
[3]: https://plus.google.com/+CarlSednaoui
[4]: http://carlsed.tumblr.com
[5]: http://dribbble.com/carlsednaoui
[6]: http://www.github.com/carlsednaoui
<br>
<br>

# Structure 📰

 - Header
    - Navbar
    - Title
- Main
    - Hero Section
    - About Us
    - Our services
    - Personal Trainers
    - Contact Us
- Footer
<br>
<br>

# Assets and Ingredients
- HTML
- CSS
- Javascript
- Resources:
    - Video
    - Image
    - Icon
<br>
<br>

# How to Set up

You will need a github account to clone this repository, make sure you're connected to github.

1. Clone this repository
```
https://github.com/revou-fsse-5/milestone-1-kingahmadr.git
```

2. Create a new branch named "develop", in this repository we would like to develop the website with our custom information.

```
git branch -b "develop"
```

3. Once it's created, checkout to a new branch
```
git checkout -b "develop"
```

4. Develop & modify the website with your personal information, once it's done you will need to push it.
```
git add .
git commit -m "update message" // make sure to give details commit message to get better logs
git push origin develop 
```

5. Once you're done, you can merge into main/master branch for production build.
```
git checkout main
git pull origin main // pull the latest version before commit merge
git merge develop // if there are any conflicts, you should resolve them manually
git commit -m "Merge develop into main"
git push origin main
```
<br>
<br>

# Deployment

The project has been successfully deployed with Netifly.
You can see the live production site on the following link: [https://ahmadcloud.my.id](https://ahmadcloud.my.id) or [this link](https://www.ahmadcloud.my.id)

<br>

1. Login to your Netifly account and add a new site from there
2. Import deployment from the GitHub existing project
3. Choose the public repositoy for the deployment

![Netifly Deployment](/readme-img/2024-07-11_16-41.png)

# Setup Custom Domain in the Netifly Deployment

1. Navigate to the step 2 after deployment for setting up the custom domain
2. Add your main domain on this form. I choose ***ahmadcloud.my.id*** as my main domain
3. After adding your main domain into the custom site on Netifly, add the external DNS for the verification. We ought to add the CNAME record to our DNS manager so that the Netifly can verify the domain owner.
Since I use CloudFlare as my DNS manager, I need to add those record to my CloudFlare as well.

![Custom Domain Setup](/readme-img/2024-07-11_16-56.png)
<br>

![Setup CNAME](/readme-img/2024-07-06_10-25.png)

![Setup CNAME www](/readme-img/2024-07-06_10-27.png)

5. Refresh your Domain Management page, and the deployment should now pointed to your main custom Domain

6. Congratulation! Your site has been setup online!!

Happy browsing!!

## 📔 Link to my deployment and repository
* Deploy link: [ahmadcloud.my.id](https://ahmadcloud.my.id/) 
* Repository link: [github.com/revou-fsse-5/milestone-1-kingahmadr.git](https://github.com/revou-fsse-5/milestone-1-kingahmadr.git)
<br>
<br>
<br>

<div align="center">


