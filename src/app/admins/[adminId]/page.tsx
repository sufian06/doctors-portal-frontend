interface Props {
  params: {
    adminId: number
  }
}

const Admins = (props:Props) => {
  const {adminId} = props.params
  return <div>Admins: {adminId}</div>;
};

export default Admins;
