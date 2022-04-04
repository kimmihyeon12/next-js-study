// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function (req, res) {
  //Max-Age=0 쿠키소멸!
  res.setHeader("Set-cookie", "a_name=Mike;Max-Age=0;HttpOnly,Secure");
  res.statusCode = 200;
  res.json({ message: "ok" });
}
