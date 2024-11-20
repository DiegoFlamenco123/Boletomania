import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
 
const TABS = [
  {
    label: "Representante",
    value: "all",
  },
  {
    label: "Evento",
    value: "monitored",
  },
  {
    label: "InvoiceID",
    value: "unmonitored",
  },

];
 
const TABLE_HEAD = ["Invoice ID", "Fecha de Inicio", "Representante", "Costo Del Evento", "Ganancia Al Momento"];
 
const TABLE_ROWS = [
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-6.jpg",
    name: "Paul Shawn",
    email: "Paul@boletomania.com",
    job: "$100,000",
    gain: "$500,000",
    online: "#F44334",
    date: "23/04/23",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    name: "Paola Prieto",
    email: "Paola@boletomania.com",
    job: "$100,000",
    gain: "500,000",
    online: "#F44336",
    date: "23/04/23",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
    name: "Camila Hintz",
    email: "Camila@boletomania.com",
    job: "$100,000",
    gain: "500,000",
    online: "#F44337",
    date: "19/09/22",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    name: "Michael Levi",
    email: "michael@boletomania.com",
    job: "$100,000",
    gain: "500,000",
    online: "#S44323",
    date: "24/01/23",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
    name: "Ronald Frazier",
    email: "Ronald@boletomania.com",
    job: "$100,000",
    gain: "500,000",
    online: "#G44235",
    date: "04/10/22",
  },
];
 
export default function Example() {
  return (
        <div className=" xl:absolute   py-[50px] px-[] flex   justify-center right-16  w-full xl:w-9/12  h-9/12">
    <Card className=" h-full shadow-xl w-full ">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray" className="px-5">
              Eventos 
            </Typography>
            <Typography color="gray" className="mt-1 px-5 font-normal">
              Informacion Sobre Todos Los Eventos 
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col px-5 gap-2 md:flex-row">
            <Button variant="outlined" color="blue-gray" size="sm" className=" px-5 ">
              view all
            </Button>
            <Link to='/createEventPage'>
            <Button variant="outlined" color="blue-gray" size="sm" className=" px-5 ">
              create event
            </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col bg-gray-100 items-center justify-between gap-4 xl:flex-row">
          <Tabs value="all" className="w-full  xl:w-max ">
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value} className="">
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className="w-full bg-white border xl:w-72">
            <Input className=" outline-none border" label="Search" icon={<MagnifyingGlassIcon className="h-5 w-5" />} />
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(({ img, name, email, job, gain, online, date }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
              return (
                <tr key={name}>

                      {/* InvoiceID  */}

                  <td className={classes}>
                    <div className="w-max flex">
                    <Typography variant="small" color="blue-gray" className="font-normal justify-center">
                        {online}
                      </Typography>
                    </div>
                  </td>

                   {/* fecha */}
                   <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {date}
                    </Typography>
                  </td>
                  
                  {/* nombre de la persona  */}
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <Avatar src={img} alt={name} size="base" />
                      <div className="flex flex-col">
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {name}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {email}
                        </Typography>
                      </div>
                    </div>
                  </td>

                    {/* rol  */}
                  <td className={classes}>
                    <div className="flex flex-col">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {job}
                      </Typography>
                    </div>
                  </td>
                     
                 

                         {/* rol  */}
                         <td className={classes}>
                    <div className="flex flex-col">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {gain}
                      </Typography>
                    </div>
                  </td>

                  <td className={classes}>
                    <Tooltip content="Edit User">
                      <IconButton variant="text" color="blue-gray">
                        <PencilIcon className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>
                  </td>

                 
              
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page 1 of 10
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" color="blue-gray" size="sm">
            Siguiente
          </Button>
          <Button variant="outlined" color="blue-gray" size="sm">
            Anterior
          </Button>
        </div>
      </CardFooter>
    </Card>
    </div>
  );
}