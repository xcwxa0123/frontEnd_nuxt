    interface EpisodeDetail { episode_id: string, refresh_time: string, sub_title: string }
    interface EpisodeObj { main_title: string, book_id: string, episodeDetail: Array<EpisodeDetail> }
    interface Author { author_id: string, author_name: string }
    // interface Book { author: Author, book_desc: string, book_id: string, book_title: string, full_desc: string, hot_rank: number, last_time: string, number_of_episode?: string, publish_state?: number }
    interface Book { author: Author, book_desc: string, book_id: string, book_title: string, full_desc: string, hot_rank: number, last_time: string, number_of_episode: string, publish_state: number }
    interface EpisodeText { file_content: string, file_name: string }
    interface myHTMLElement extends HTMLElement { isClicked: Boolean | null }
    export { EpisodeDetail, EpisodeObj, Author, Book, EpisodeText, myHTMLElement }