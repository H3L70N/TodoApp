import Link from 'next/link'

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link href="/tasks" className="btn btn-ghost text-xl">TodoApp</Link>
        </div>
        <div className="flex-none">
          <Link  href="/tasks/list" className="btn border btn-ghost">
            List Tasks
          </Link>
        </div>
        <div className="flex-none">
          <Link  href="/tasks/create" className="btn btn-ghost">
            Create Task
          </Link>
        </div>
      </div>
    </>
  );
}
