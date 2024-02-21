import Link from 'next/link'

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">TodoApp</a>
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
