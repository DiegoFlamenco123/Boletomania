import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
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
 
const TABS = [
  {
    label: "Administrador",
    value: "all",
  },
  {
    label: "LectorQR",
    value: "monitored",
  },
  {
    label: "user",
    value: "unmonitored",
  },

];
 
const TABLE_HEAD = ["Miembro", "Permisos", "Invoice ID", "Fecha de Inicio", ""];
 
const TABLE_ROWS = [
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "John Michael",
    email: "john@gmail.com",
    job: "LectorQR",
    org: "Steve Aoki",
    online: "#F44334",
    date: "23/04/23",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    name: "Alexa Liras",
    email: "alexa@creative-tim.com",
    job: "Administrador",
    org: "Developer",
    online: "#F44336",
    date: "23/04/23",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
    name: "Laurent Perrier",
    email: "laurent@creative-tim.com",
    job: "Administrador",
    org: "Events",
    online: "#F44337",
    date: "19/09/22",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    name: "Michael Levi",
    email: "michael@creative-tim.com",
    job: "User",
    org: "",
    online: "#F44323",
    date: "24/01/23",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
    name: "Richard Gran",
    email: "richard@creative-tim.com",
    job: "Organizador",
    org: "Executive",
    online: "#F44235",
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
              Lista de Miembros
            </Typography>
            <Typography color="gray" className="mt-1 px-5 font-normal">
              Informacion Sobre Nuestros Miembros
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 md:flex-row">
            <Button variant="outlined" color="blue-gray" size="sm" className=" ">
              view all
            </Button>
            <Link to="/AddMemberPage" className="flex items-center bg-blue-500 rounded-md text-white px-3">
              <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add member
            </Link>
          </div>
        </div>
        <div className="flex flex-col bg-gray-100 items-center justify-between gap-4 xl:flex-row">
          <Tabs value="all" className="w-full xl:w-max">
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value}>
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
            {TABLE_ROWS.map(({ img, name, email, job, org, online, date }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
              return (
                <tr key={name}>
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
                  <td className={classes}>
                    <div className="flex flex-col">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {job}
                      </Typography>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal opacity-70"
                      >
                        {org}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="w-max flex">
                    <Typography variant="small" color="blue-gray" className="font-normal justify-center">
                        {online}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {date}
                    </Typography>
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