export const fetchTOP20 =  (RepoData) => {
    return RepoData.sort((a, b) => b.percentChange1D - a.percentChange1D).slice(0, 20);
    
}
export const fetchBottom20 =  (RepoData) => {
        return RepoData.sort((a, b) => a.percentChange1D - b.percentChange1D).slice(0, 20);
    
}
export const fetchANY20 =  (RepoData) => {
    return RepoData.slice(0, 20);
}
export const fetchAnyMid20 =  (RepoData) => {
    return RepoData.slice(20, 40);
}