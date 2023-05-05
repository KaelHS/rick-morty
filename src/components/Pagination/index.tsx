"use client"
import { useState } from 'react'
import './style.css'
import { useCharacters } from '@/context/CharactersContext'

export type PaginationProps = {
  limitPerPage: number
  totalList: number
  maxButtons: number
}

export const Pagination = ({
  limitPerPage,
  totalList,
  maxButtons,
}: PaginationProps) => {
  const MAX_BUTTONS = maxButtons
  const MAX_LEFT = (MAX_BUTTONS - 1) / 2

  const [firstPage, setFirstPage] = useState(true)
  const [lastPage, setLastPage] = useState(false)
  const { pagination, setPagination, getCharacters, search } = useCharacters()

  const pages = Math.ceil(totalList / limitPerPage)
  let current = pages === 1 ? 1 : pagination.current
  const maxFirst = Math.max(pages - (MAX_BUTTONS - 1), 1)
  const first = Math.min(Math.max(current - MAX_LEFT, 1), maxFirst)

  function onPageChange(page: number) {
    window.scrollTo(0,0)
    setPagination({
      ...pagination,
      current: page
    })
    getCharacters({
      variables: {
        page: page,
        filter: {
          name: search
        }
      }
    })

    setFirstPage(page === 1 ? true : false)
    setLastPage(pages === page ? true : false)
  }

  return (
    <div id="pagination">
      <ul className="list">
        <li className="item">
          <button
            className={`button-pagination ${
              current === 1 ? 'button-pagination-selected' : ''
            }`}
            disabled={firstPage}
            onClick={() => {
              current = 1
              onPageChange(1)
            }}
          >
            1
          </button>

          {current - 1 >= MAX_BUTTONS ? (
            <span className="span-pagination">{'<<'}</span>
          ) : null}
        </li>

        {Array.from({ length: Math.min(MAX_BUTTONS, pages) })
          .map((_, index) => index + first)
          .map((page) => {
            return (
              <li key={page}>
                {pages !== page && page !== 1 && (
                  <button
                    className={`button-pagination ${
                      page === current ? 'button-pagination-selected' : ''
                    }`}
                    disabled={page === current}
                    onClick={() => onPageChange(page)}
                  >
                    {page}
                  </button>
                )}
              </li>
            )
          })}

        {pages > 1 && (
          <li>
            {current <= pages - MAX_BUTTONS ? (
              <span className="span-pagination">{'>>'}</span>
            ) : null}
            <button
              className={`button-pagination ${
                lastPage ? 'button-pagination-selected' : ''
              }`}
              disabled={lastPage}
              onClick={() => onPageChange(pages)}
            >
              {pages}
            </button>
          </li>
        )}
      </ul>
    </div>
  )
}