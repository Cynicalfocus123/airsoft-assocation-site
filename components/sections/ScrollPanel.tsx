import Image from "next/image";
import Link from "next/link";
import styles from "./ScrollPanel.module.css";
export function ScrollPanel({ title, eyebrow, copy, image, href, reverse=false }: { title:React.ReactNode; eyebrow:string; copy:string; image:string; href:string; reverse?:boolean }) { return <section className={`${styles.panel} ${reverse?styles.reverse:""}`}><div className={styles.art}><Image src={image} alt="" fill sizes="100vw" /></div><div className={styles.text}><p className="eyebrow">{eyebrow}</p><h2>{title}</h2><p>{copy}</p><Link href={href}>EXPLORE <span>↗</span></Link></div></section>; }
