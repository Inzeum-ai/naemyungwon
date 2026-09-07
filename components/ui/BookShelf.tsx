import Image from 'next/image'
import Icon from './Icon'
import Reveal from './Reveal'
import { JOOHAN_BOOKS } from '@/lib/joohan'

export default function BookShelf() {
  return <ul className="author-books">{JOOHAN_BOOKS.map(book => <li key={book.slug}><Reveal>
    <a className="author-book" href={book.href} target="_blank" rel="noopener noreferrer" aria-label={`${book.title} — 도서 상세 보기 (새 창)`}>
      <div className="author-book-cover"><Image src={`/images/books/${book.slug}.jpg`} alt={`${book.title} 책 표지`} width={book.width} height={1200} sizes="(max-width:767px) 42vw, 260px" /></div>
      <p className="author-book-note">{book.note}</p>
      <div className="author-book-heading"><h3>{book.title}</h3><Icon name="arrow-up-right" size={20}/></div>
      <p className="author-book-description">{book.description}</p>
      <p className="author-book-edition">{book.publisher} · {book.year}{book.edition && ` · ${book.edition}`}</p>
    </a>
  </Reveal></li>)}</ul>
}
