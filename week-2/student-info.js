import Link from 'next/link';

export default function StudentInfo() {
  return (
    <section>
      <p>Student: Mbama Chidera</p>
      <p>
        Repository:{" "}
        <Link href="https://github.com/mbama-chidera/cprg306-assignments">
          https://github.com/mbama-chidera/cprg306-assignments
        </Link>
      </p>
    </section>
  );
}