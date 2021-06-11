import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import { IconButton } from '@material-ui/core';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
    createStyles({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }),
)(TableRow);

interface IProps {
     rows: any[];
    // botonHandler: any;
    // editeHandler: any;

}

// function createData(nombre: string, edad: number, sexo: string, codigo: string) {
//     return { nombre, edad, sexo, codigo};
// }

// const rows = [
//     createData('Frozen yoyghurt', 159, 'f' , 'ghhg'),
//     createData('Ice cream sandwich', 237, 'f','ghhg'),
//     createData('Eclair', 262, 'f','ghhg'),
//     createData('Cupcake', 305,  'f','ghhg'),
//     createData('Gingerbread', 356, 'f','ghhg'),
// ];



export default function MyTable(props: IProps) {
    const classes = useStyles();

    const botonHandler = (event: unknown) => {
        console.log("Filtro", event)
    };
    const editeHandler = (event: unknown) => {
        console.log("Editar", event)
    };

    return (
        <TableContainer component={Paper}>
            <ButtonGroup size="large" onClick={botonHandler} aria-label="large outlined primary button group">
                <Button>Todos</Button>
                <Button>Hombres</Button>
                <Button>Mujeres</Button>
            </ButtonGroup>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        {Object.keys(props.rows[0]).map((key, index) => (
                            index === 0 ? <StyledTableCell key={index}  >{key}</StyledTableCell> : <StyledTableCell key={index} align="center" >{key}</StyledTableCell> 
                        ))}
                        <StyledTableCell align="center" >Actions</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                  {props.rows.map((row: any, index: number) => {
                return (
                  <StyledTableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {Object.values<string>(row).map((value, index) => (
                      index === 0 ? <StyledTableCell key={index}>{value}</StyledTableCell> : <StyledTableCell key={index} align="center">{value}</StyledTableCell>
                    ))}
                    <TableCell align="center">
                      <IconButton  aria-label="delete" onClick={editeHandler}><EditIcon /></IconButton>
                      </TableCell>
                  </StyledTableRow> 
                );
              })}
                </TableBody>
            </Table>
        </TableContainer> 

    );
}

