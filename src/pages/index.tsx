import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import Header from "../components/header";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="container m-auto mt-16">
        <ul className="flex gap-12">
          <li>
            <Link href="/tournaments/1">
              <div className="card bg-base-100 shadow-xl">
                <figure>
                  <img className="w-full" src="/court.jpeg" alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Tournament 1<div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Beach</div>
                    <div className="badge badge-outline">Amator</div>
                  </div>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/tournaments/2">
              <div className="card bg-base-100 shadow-xl">
                <figure>
                  <img className="w-full" src="/court.jpeg" alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Tournament 2<div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Beach</div>
                    <div className="badge badge-outline">Amator</div>
                  </div>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/tournaments/3">
              <div className="card bg-base-100 shadow-xl">
                <figure>
                  <img className="w-full" src="/court.jpeg" alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Tournament 3<div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Beach</div>
                    <div className="badge badge-outline">Amator</div>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
