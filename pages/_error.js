//클라이언트 에러와 서버 에러 모두 관리
function Error({ statusCode }) {
  console.log(statusCode);
  return <p>{`an error ${statusCode} occured on server`}</p>;
}
Error.getInitalProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
export default Error;
