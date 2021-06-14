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
    editeHandler: any;
    botonTodosHandler:any;
    botonHombresHandler:any;
    botonMujeresHandler:any;
}



export default function MyTable(props: IProps) {
    const classes = useStyles();


    return (

        <TableContainer component={Paper}>
            <ButtonGroup size="large"  aria-label="large outlined primary button group">
                <Button onClick={props.botonTodosHandler}>Todos</Button>
                <Button onClick={props.botonHombresHandler}>Hombres</Button>
                <Button onClick={props.botonMujeresHandler}>Mujeres</Button>
            </ButtonGroup>
            {props.rows.length ?
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
                                        <IconButton value={props.rows} aria-label="delete" onClick={props.editeHandler}><EditIcon /></IconButton>
                                    </TableCell>
                                </StyledTableRow>
                            );
                        })}
                    </TableBody>
                </Table>
                : <p>No hay datos disponibles!</p>}
        </TableContainer>

    );
}

