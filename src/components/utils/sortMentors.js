const sortMentors = (data) =>{
    const sortedData = data.sort((mentor1,mentor2)=>{
        return mentor2.rating - mentor1.rating;
    });
    return sortedData;
}

export default sortMentors;