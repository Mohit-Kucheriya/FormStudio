// Projects

const projects = [
    {
        name: 'PROJECT 1',
        type: 'WEB DESIGN',
        pos: 'start',
        image: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=2370&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'PROJECT 2',
        type: 'GRAPHIC DESIGN',
        pos: 'mid',
        image: 'https://images.unsplash.com/reserve/aOcWqRTfQ12uwr3wWevA_14401305508_804b300054_o.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2952&q=80'
    },
    {
        name: 'PROJECT 3',
        type: 'TYPE DESIGN',
        pos: 'end',
        image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=2487&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'PROJECT 4',
        type: 'WEB DESIGN',
        pos: 'mid',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2564&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'PROJECT 5',
        type: 'WEB DESIGN',
        pos: 'end',
        image: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&q=80&w=2487&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'PROJECT 6',
        type: 'GRAPHIC DESIGN',
        pos: 'mid',
        image: 'https://images.unsplash.com/photo-1561998338-13ad7883b20f?auto=format&fit=crop&q=80&w=2487&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'PROJECT 7',
        type: 'WEB DESIGN',
        pos: 'start',
        image: 'https://images.unsplash.com/photo-1454117096348-e4abbeba002c?auto=format&fit=crop&q=80&w=2602&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'PROJECT 8',
        type: 'TYPE DESIGN',
        pos: 'end',
        image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },

]

const createProject = () => {
    projects.forEach(project => {

        let panel = document.createElement("div");
        panel.classList.add("panel-container", `${project.pos}`);

        let imageContainer = document.createElement("div");
        imageContainer.className = "image-container"

        let image = document.createElement("img");
        image.classList.add("project-img");
        image.src = project.image;

        let projectsDetails = document.createElement("div");
        projectsDetails.classList.add("project-details");

        let projectName = document.createElement("p");
        projectName.innerText = project.name

        let projectType = document.createElement("p");
        projectType.innerText = project.type

        imageContainer.appendChild(image);

        projectsDetails.append(projectName, projectType)
        panel.append(imageContainer, projectsDetails);

        document.querySelector(".project-slider").appendChild(panel)
    })
}

const blogPosts = [
    {
        title: 'BLOG POST ONE',
        time: '3 MIN',
        image: 'https://images.unsplash.com/photo-1561998338-13ad7883b20f?auto=format&fit=crop&q=80&w=2487&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'BLOG POST TWO',
        time: '4 MIN',
        image: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=2370&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'BLOG POST THREE',
        time: '5 MIN',
        image: 'https://images.unsplash.com/photo-1454117096348-e4abbeba002c?auto=format&fit=crop&q=80&w=2602&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
]


const createBlogpost = () => {
    blogPosts.forEach(post => {

        let blogPost = document.createElement("div");
        blogPost.classList.add("blog-post-container");

        let postDiv = document.createElement("div");
        postDiv.classList.add("post-div");

        let imageContainerBlog = document.createElement("div");
        imageContainerBlog.classList.add("image-container-blog");

        let imgBlog = document.createElement("img");
        imgBlog.classList.add("img-blog");
        imgBlog.src = post.image;

        let blogPostDetails = document.createElement("div");
        blogPostDetails.classList.add("blog-post-details")

        let blogName = document.createElement("p");
        blogName.innerText = post.title;

        let blogTime = document.createElement("p");
        blogTime.innerText = post.time;


        // Adding image in the image container
        imageContainerBlog.appendChild(imgBlog);

        // Adding blog Name & Time in the blogPostDetails div
        blogPostDetails.append(blogName, blogTime);

        // Adding the imageContainer & blogPostDetails in the postDiv Container
        postDiv.append(imageContainerBlog, blogPostDetails);

        // Adding postDivContainer in the blogPost Container 
        blogPost.appendChild(postDiv);

        document.getElementById("blog").appendChild(blogPost)
    })
}


export {
    createProject,
    createBlogpost
}
