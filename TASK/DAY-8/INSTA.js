const likecode = async () => {
    return new Promise((likepost) => {
        setTimeout(() => {
            likepost("Liked Success");
        }, 1000);
    });
};

const Commentcode = async () => {
    return new Promise((commetpost) => {
        setTimeout(() => {
            commetpost("Commented Success");
        }, 1000);
    });
};

const sharecode = async () => {
    return new Promise((sharepost) => {
        setTimeout(() => {
            sharepost("Shared Success");
        }, 1000);
    });
};

const postcode = async () => {
    const post = new Promise((createpost) => {
        setTimeout(() => {
            createpost("Post Created Success");
        }, 1000);
    });
    const [one,two,three,four] = await Promise.all([post,likecode(),Commentcode(),sharecode()])
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
};
postcode(); // first call 