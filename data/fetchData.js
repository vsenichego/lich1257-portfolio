export const fetchContacts = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/global?populate[navigation][populate][0]=Contacts`);
    if (!res.ok) {
        throw new Error('Failed to fetch contacts');
    }
    const data = await res.json();
    return data.data.navigation.Contacts;
};

export const fetchCategories = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/global?populate[navigation][populate][0]=Categories`);
    if (!res.ok) {
        throw new Error('Failed to fetch categories');
    }
    const data = await res.json();
    return data.data.navigation.Categories;
};

export const fetchProjectsByCategory = async (categoryName) => {
    const res = await fetch(`${process.env.BASE_URL}/api/projects?filters[categories][categoryName][$eq]=${categoryName}&populate=*`);
    if (!res.ok) {
        throw new Error('Failed to fetch projects');
    }
    const data = await res.json();

    console.log('PROJECTS', data)

    return data.data;
};