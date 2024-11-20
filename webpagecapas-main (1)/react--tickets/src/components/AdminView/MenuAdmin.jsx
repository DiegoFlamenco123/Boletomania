import { Link } from "react-router-dom";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  UserGroupIcon,
  ClipboardDocumentIcon,
  MapPinIcon,
  BanknotesIcon,
  TicketIcon,

} from "@heroicons/react/24/solid";

export default function Example() {
  return (
    <div className="flex px-6 xl:px-12 2xl:px-10 py-6 xl:h-1/2 xl:absolute justify-center">

      <Card className="xl:w-[210px] 2xl:w-[280px] bg-gray-100 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <Typography className="text-3xl text-center text-black">
            Admin Panel
          </Typography>
        </div>
        <div className="flex justify-center">
          <List className="w-9/12  px-5">


            {/* graficas */}
            <Link to={"/chartsView"}>
              <ListItem className="text-xl p-1 ">
                <ListItemPrefix>
                  <PresentationChartBarIcon className="h-5 w-5" />
                </ListItemPrefix>
                Graficas
              </ListItem>
            </Link>

            {/* admin */}
            <Link to={"/peopleView"}>
              <ListItem className="text-xl p-1  ">
                <ListItemPrefix>
                  <UserGroupIcon className="h-5 w-5" />
                </ListItemPrefix>
                Miembros
              </ListItem>
            </Link>

            {/* Projectos */}
            <Link to={"/eventsView"}>
              <ListItem className="text-xl p-1 ">
                <ListItemPrefix>
                  <ClipboardDocumentIcon className="h-5 w-5" />
                </ListItemPrefix>
                Eventos
              </ListItem>
            </Link>
          
            <Link to={"/locationCreation"}>
              <ListItem className="text-xl p-1 ">
                <ListItemPrefix>
                  <MapPinIcon className="h-5 w-5" />
                </ListItemPrefix>
                Location
              </ListItem>
            </Link>

            <Link to={"/tierCreation"}>
              <ListItem className="text-xl  p-1">
                <ListItemPrefix>
                  <TicketIcon className="h-5 w-5" />
                </ListItemPrefix>
                Tiers
              </ListItem>
            </Link>
          
            <Link to={"/sponsorCreation"}>
              <ListItem className="text-xl p-1 ">
                <ListItemPrefix>
                  <BanknotesIcon className="h-5 w-5" />
                </ListItemPrefix>
                Sponsors
              </ListItem>
            </Link>
          </List>
        </div>
      </Card>
    </div>
  );
}