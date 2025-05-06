import { getColaboratorData } from "@/app/lib/data";
import Typography from "@mui/material/Typography";

export default async function PageReport() {
  const colaborator = await getColaboratorData();
  return (
    <div>
      <Typography variant="h3"> Listagem de Colaboradores </Typography>

      {colaborator !== undefined && (
        <ul>
          {colaborator.map((colab) => (
            <li key={colab.id}>
              {colab.name} - {colab.mat}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
