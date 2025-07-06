export const fetchTOP20 =  (RepoData) => {
    return RepoData.sort((a, b) => b.percentChange5D - a.percentChange5D).slice(0, 20);
    
}
export const fetchBottom20 =  (RepoData) => {
        return RepoData.sort((a, b) => a.percentChange5D - b.percentChange5D).slice(0, 20);
    
}
export const fetchANY20 =  (RepoData) => {
    return RepoData.slice(0, 20);
}
export const fetchAnyMid20 =  (RepoData) => {
    return RepoData.slice(20, 40);
}