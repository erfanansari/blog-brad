export interface Blog {
    [k: string]: any
    // id: number
    // title: string
    // description: string
    // content: string
    // slug: string
    // // category: Category
    // author: Author
    // published_at: string
    // created_at: string
    // updated_at: string
    // image: Image
}

export interface Author {
    id: number
    name: string
    email: string
    created_at: string
    updated_at: string
    picture: Image
}

export interface Image {
    id: number
    name: string
    alternativeText: null
    caption: null
    width: number
    height: number
    formats: Formats
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: null
    provider: string
    provider_metadata: null
    created_at: string
    updated_at: string
}

export interface Formats {
    thumbnail: Format
    large: Format
    medium: Format
    small: Format
}

export interface Format {
    name: string
    hash: string
    ext: string
    mime: string
    width: number
    height: number
    size: number
    path: null
    url: string
}

// export interface Category {
//     id: number
//     name: string
//     slug: string
//     created_at: string
//     updated_at: string
// }
// function isCategory(arg: any): arg is Category {
//     return (
//         typeof arg.id === 'number' &&
//         typeof arg.name === 'string' &&
//         typeof arg.slug === 'string' &&
//         !Number.isNaN(Date.parse(arg.created_at)) &&
//         !Number.isNaN(Date.parse(arg.updated_at))
//     )
// }

// function isAuthor(arg: any): arg is Author {
//     return (
//         typeof arg.id === 'number' &&
//         typeof arg.name === 'string' &&
//         typeof arg.email === 'string' &&
//         !Number.isNaN(Date.parse(arg.created_at)) &&
//         !Number.isNaN(Date.parse(arg.updated_at))
//         // arg.image instanceof Image
//     )
// }

export function isBlog(arg: any): arg is Blog {
    // return (
    //     typeof arg.id === 'number' &&
    //     typeof arg.title === 'string' &&
    //     typeof arg.description === 'string' &&
    //     typeof arg.content === 'string' &&
    //     typeof arg.slug === 'string' &&
    //     // isCategory(arg.category) &&
    //     // isAuthor(arg.author) &&
    //     !Number.isNaN(Date.parse(arg.published_at)) &&
    //     !Number.isNaN(Date.parse(arg.created_at)) &&
    //     !Number.isNaN(Date.parse(arg.updated_at))
    //     // arg.image instanceof Image
    // )
    return true
}

export function assertIsTypedArray<T>(
    arg: any,
    check: (val: any) => val is T,
): asserts arg is T[] {
    //     if (!Array.isArray(arg))
    //         throw new Error('Not an array: ' + JSON.stringify(arg))

    //     if (arg.some((blog) => !check(blog))) throw new Error('Violators found')
    return true
}

// async function getBlogs(): Promise<Blog[]> {
//     return (
//         fetch('https://someurl')
//             .then((res) => res.json())
//             // .then((data) => data as Team[])
//             .then((data) => {
//                 assertIsTypedArray(data, isBlog)
//                 return data
//             })
//     )
// }
