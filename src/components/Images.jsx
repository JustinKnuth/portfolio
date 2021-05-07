import a from "../assets/a.jpg"
import b from "../assets/b.jpg"
import c from "../assets/c.jpg"
import d from "../assets/d.jpg"
import e from "../assets/e.jpeg"
import f from "../assets/f.jpeg"
import g from "../assets/g.jpeg"
import h from "../assets/h.JPG"
import i from "../assets/i.jpeg"
import j from "../assets/j.jpeg"
import k from "../assets/k.JPG"
import l from "../assets/l.jpeg"
import m from "../assets/m.jpeg"
import n from "../assets/n.jpeg"
import o from "../assets/o.jpeg"
import p from "../assets/p.jpeg"
import q from "../assets/q.jpeg"
import r from "../assets/r.jpeg"
import s from "../assets/s.jpeg"
import t from "../assets/t.jpeg"
import u from "../assets/u.jpeg"
import v from "../assets/v.jpeg"
import w from "../assets/w.jpeg"
import Carousel from 'nuka-carousel'


export default function Images() {




  return (
    <div className="carousel">
      <h1>Some of my images</h1>
     
        <Carousel autoplay={true}>
          <img className="images" src={a} alt="" />
          <img className="images" src={b} alt="" />
          <img className="images" src={c} alt="" />
          <img className="images" src={d} alt="" />
          <img className="images" src={e} alt="" />
          <img className="images" src={f} alt="" />
          <img className="images" src={g} alt="" />
          <img className="images" src={h} alt="" />
          <img className="images" src={i} alt="" />
          <img className="images" src={j} alt="" />
          <img className="images" src={k} alt="" />
          <img className="images" src={l} alt="" />
          <img className="images" src={m} alt="" />
          <img className="images" src={n} alt="" />
          <img className="images" src={o} alt="" />
          <img className="images" src={p} alt="" />
          <img className="images" src={q} alt="" />
          <img className="images" src={r} alt="" />
          <img className="images" src={s} alt="" />
          <img className="images" src={t} alt="" />
          <img className="images" src={u} alt="" />
          <img className="images" src={v} alt="" />
          <img className="images" src={w} alt="" />
        </Carousel>
      
    </div>



  )
}