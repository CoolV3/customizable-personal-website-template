export type SiteConfig = {

    general: {
        gradient: string, // Tailwindcss Gradient Class
        buttonGradient: string,
        buttonHover: string, //the class when for example a button is hovered
        headlineGradient: string
    }

    aboutMe: {
        fullName: string,
        shortDescription: string,
        titleImage: string,  // You have to put your image in the /public folder
        longDescription: string,
    }

    books: {
        title: string,
        shortDescription: string,
        longDescription: string,
        titleImage: string,
        Images: string[],
        sampleUrl: string,  //If you have a reading sample on a external site
        buyUrl: string,
        buyButtonText: string,
    }[]

    bookSamples: { //for example a Word document
        chapterHeadline: string,
        content: string
    }[]

    newsletter: {
        subheading: string,
        emailLabel: string,
        buttonText: string
    }

    contact: {
        heading: string,
        email: string,
    }
}

export const siteConfig = {
    general: {
        gradient: "bg-linear-to-br from-yellow-500 to-violet-400",
        buttonGradient: "bg-linear-to-br from-yellow-600 to-yellow-400",
        buttonHover: "hover:to-yellow-200",
        headlineGradient: "bg-linear-to-br from-yellow-500 to-yellow-700",
    },

    aboutMe: {
        fullName: "Max Mustermann",
        shortDescription: "About me a short description",
        titleImage: "/testImage.jpg",  // You have to put your image in the /public folder
        longDescription: "Long Description ... ... ...",
    },

    books: [
        {
            title: "Book Title 1",
            shortDescription: "A short description about the first book",
            longDescription: "A long description about the first book",
            titleImage: "/testImage.jpg",
            Images: [],
            sampleUrl: "",
            buyUrl: "amazon.com",
            buyButtonText: "Buy Now"
        },
        {
            title: "Book Title 2",
            shortDescription: "A short description about the second book",
            longDescription: "A long description about the second book",
            titleImage: "/testImage.jpg",
            Images: [],
            sampleUrl: "",
            buyUrl: "amazon.de",
            buyButtonText: "Buy please"
        }
    ],

    bookSamples: [   //for example a Word document
        {
            chapterHeadline: "An Adventure",
            content: "Sample Book Content"
        },
        {
            chapterHeadline: "An Adventure 2",
            content: "Sample Book Content 2"
        }
    ],

    newsletter: {
        subheading: "Stay tuned",
        emailLabel: "Your Email",
        buttonText: "Sign up"
    },

    contact: {
        heading: "Contact me",
        email: "text@example.com",
    }

} satisfies SiteConfig