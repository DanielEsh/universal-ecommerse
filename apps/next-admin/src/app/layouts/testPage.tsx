'use client'
import { useFetchCurrentUser } from '@/src/shared/api/user/queries'

export const TestPage = () => {
  const { isLoading, data } = useFetchCurrentUser()

  const handleFetch = () => {
    console.log('data', data)
  }

  return (
    <div>
      <div>Test component</div>
      <button onClick={handleFetch}>fetch</button>

      {isLoading && <div>isLoading</div>}

      {data?.map((item) => (
        <div key={item.id} className="flex gap-3">
          <div>{item.id}</div>
          <div>{item.name}</div>
          <div>{item.description}</div>
        </div>
      ))}
    </div>
  )
}
