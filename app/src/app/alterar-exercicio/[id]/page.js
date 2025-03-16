import Formulario from "@/components/formularios/Formulario";

const PageAlterarExercicio = ({params}) => {

  console.log(params.id)
  return (
    <div>
      <Formulario id={params.id} />
    </div>
  );
};

export default PageAlterarExercicio;
