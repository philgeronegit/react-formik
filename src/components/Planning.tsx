import { Table } from "./table/table";
import { Td } from "./table/td";
import Th from "./table/Th";
import { Tr } from "./table/tr";

const Planning = () => {
  const headerTh = (
    <>
      <Th></Th>
      <Th colSpan={4}>Matin</Th>
      <Th colSpan={4}>Après midi</Th>
    </>
  );
  return (
    <Table thead={headerTh}>
      <Tr>
        <Td>Jours/heures</Td>
        <Td>08-09</Td>
        <Td>09-10</Td>
        <Td>10-11</Td>
        <Td>11-12</Td>
        <Td>14-15</Td>
        <Td>15-16</Td>
        <Td>16-17</Td>
        <Td>17-18</Td>
      </Tr>
      <Tr>
        <Td>Lundi</Td>
        <Td colSpan={4}>Analyse de données</Td>
        <Td colSpan={2}>Théorie des graphes</Td>
        <Td>***</Td>
        <Td>***</Td>
      </Tr>
      <Tr>
        <Td>Mardi</Td>
        <Td>***</Td>
        <Td>***</Td>
        <Td colSpan={2}>Théorie des graphes</Td>
        <Td colSpan={2}>TP informatique</Td>
        <Td>***</Td>
        <Td>***</Td>
      </Tr>
      <Tr>
        <Td>Mercredi</Td>
        <Td colSpan={2}>Programmation Web</Td>
        <Td>***</Td>
        <Td>***</Td>
        <Td colSpan={2}>TP programmation Web</Td>
        <Td colSpan={2}>TP théorie des graphes</Td>
      </Tr>
      <Tr>
        <Td>Jeudi</Td>
        <Td>***</Td>
        <Td>***</Td>
        <Td colSpan={2}>TP programmation Web</Td>
        <Td colSpan={4}>TP des séries</Td>
      </Tr>
      <Tr>
        <Td>Vendredi</Td>
        <Td colSpan={2}>Structure des données</Td>
        <Td colSpan={2}>TP d'analyse des données</Td>
        <Td>***</Td>
        <Td>***</Td>
        <Td>***</Td>
        <Td>***</Td>
      </Tr>
      <Tr>
        <Td>Samedi</Td>
        <Td colSpan={2}>Cours LC</Td>
        <Td colSpan={2}>TD de LC</Td>
        <Td>***</Td>
        <Td>***</Td>
        <Td>***</Td>
        <Td>***</Td>
      </Tr>
    </Table>
  );
};

export default Planning;
