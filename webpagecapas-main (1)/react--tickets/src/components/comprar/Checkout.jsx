import React from "react";
import Navbar from "../../components/header/Navbar";

export default function Example() {
  return (
    
    <section>
       <Navbar/>
      <h1 className="sr-only">Checkout</h1>

      <div className="mx-auto grid md:py-32 max-w-screen-2xl grid-cols-1 md:grid-cols-2">
        <div className="bg-gray-50 py-12 md:py-24">
          <div className="mx-auto max-w-lg space-y-8 px-4 lg:px-8">
            <div className="flex items-center gap-4">
              <img src={"https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg"} alt="" className="h-12 w-12 rounded-full bg-gray-50" />

              <h2 className="font-medium text-gray-900">Michael Levi</h2>
            </div>

            <div>
              <p className="text-2xl font-medium tracking-tight text-gray-900">
                $210.00
              </p>

              <p className="mt-1 text-sm text-gray-600">For the purchase of</p>
            </div>

            <div>
              <div className="flow-root">
                <ul className="-my-4 divide-y divide-gray-100">
                  <li className="flex items-center gap-4 py-4">
                    <img
                      src="https://static.wixstatic.com/media/d638a1_b8be99e8bd93457ba45c3e3d759809cc~mv2.jpg/v1/fit/w_2500,h_1330,al_c/d638a1_b8be99e8bd93457ba45c3e3d759809cc~mv2.jpgo"
                      alt=""
                      className="h-20 w-20 rounded object-cover"
                    />

                    <div>
                      <h3 className="text-base text-gray-900">wos</h3>

                      <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                        <div>
                          <dd className="inline">Mesa Ultra Platinum</dd>
                        </div>
                        <div>
                          <dt className="inline ">QTY 1</dt>
                        </div>
                      </dl>
                    </div>
                  </li>

                  <li className="flex items-center gap-4 py-4">
                    <img
                      src="https://i0.wp.com/tailschannel.com/wp-content/uploads/2021/11/STEVEAOKIHERO.png?resize=1920%2C1024&ssl=1"
                      alt=""
                      className="h-20 w-20 rounded object-cover"
                    />

                    <div>
                      <h3 className="text-sm text-gray-900">Steve Aoki</h3>

                      <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                        <div>
                          <dd className="inline">Mesa Ultra Platinum</dd>
                        </div>

                        <div>
                          <dt className="inline ">QTY 1</dt>
                        </div>
                      </dl>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white py-12 md:py-24">
          <div className="mx-auto max-w-lg px-4 lg:px-8">
            <form className="grid grid-cols-6 gap-4">
              <div className="col-span-3">
                <label
                  htmlFor="FirstName"
                  className="block text-xs font-medium text-gray-700"
                >
                  First Name
                </label>

                <input
                  type="text"
                  id="FirstName"
                  className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                />
              </div>

              <div className="col-span-3">
                <label
                  htmlFor="LastName"
                  className="block text-xs font-medium text-gray-700"
                >
                  Last Name
                </label>

                <input
                  type="text"
                  id="LastName"
                  className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                />
              </div>

              <div className="col-span-6">
                <label htmlFor="Email" className="block text-xs font-medium text-gray-700">
                  Email
                </label>

                <input
                  type="email"
                  id="Email"
                  className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                />
              </div>

              <div className="col-span-6">
                <label htmlFor="Phone" className="block text-xs font-medium text-gray-700">
                  Phone
                </label>

                <input
                  type="tel"
                  id="Phone"
                  className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                />
              </div>

              <fieldset className="col-span-6">
                <legend className="block text-sm font-medium text-gray-700">
                  Card Details
                </legend>

                <div className="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                  <div>
                    <label htmlFor="CardNumber" className="sr-only"> Card Number </label>

                    <input
                      type="text"
                      id="CardNumber"
                      placeholder="Card Number"
                      className="relative mt-1 w-full rounded-t-md border-gray-200 focus:z-10 sm:text-sm"
                    />
                  </div>

                  <div className="flex">
                    <div className="flex-1">
                      <label htmlFor="CardExpiry" className="sr-only"> Card Expiry </label>

                      <input
                        type="text"
                        id="CardExpiry"
                        placeholder="Expiry Date"
                        className="relative w-full rounded-es-md border-gray-200 focus:z-10 sm:text-sm"
                      />
                    </div>

                    <div className="-ms-px flex-1">
                      <label htmlFor="CardCVC" className="sr-only"> Card CVC </label>

                      <input
                        type="text"
                        id="CardCVC"
                        placeholder="CVC"
                        className="relative w-full rounded-ee-md border-gray-200 focus:z-10 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
              </fieldset>

              <fieldset className="col-span-6">
                <legend className="block text-sm font-medium text-gray-700">
                  Billing Address
                </legend>

                <div className="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                  <div>
                    <label htmlFor="Country" className="sr-only">Country</label>

                    <select
                      id="Country"
                      className="relative w-full rounded-t-md border-gray-200 focus:z-10 sm:text-sm"
                    >
                      <option>England</option>
                      <option>Scotland</option>
                      <option>Wales</option>
                      <option>Northern Ireland</option>
                      <option>Ireland</option>
                      <option>France</option>
                      <option>Germany</option>
                      <option>Italy</option>
                      <option>Spain</option>
                      <option>Portugal</option>
                      <option>Netherlands</option>
                      <option>Belgium</option>
                      <option>Sweden</option>
                      <option>Denmark</option>
                      <option>Norway</option>
                      <option>Finland</option>
                      <option>Switzerland</option>
                      <option>Austria</option>
                      <option>Greece</option>
                      <option>Turkey</option>
                      <option>Poland</option>
                      <option>Czech Republic</option>
                      <option>Hungary</option>
                      <option>Romania</option>
                      <option>Bulgaria</option>
                      <option>Russia</option>
                      <option>Ukraine</option>
                      <option>Canada</option>
                      <option>United States</option>
                      <option>Mexico</option>
                      <option>Brazil</option>
                      <option>Argentina</option>
                      <option>Chile</option>
                      <option>Colombia</option>
                      <option>Peru</option>
                      <option>Australia</option>
                      <option>New Zealand</option>
                      <option>Japan</option>
                      <option>China</option>
                      <option>South Korea</option>
                      <option>India</option>
                      <option>Thailand</option>
                      <option>Singapore</option>
                      <option>Malaysia</option>
                      <option>Indonesia</option>
                      <option>South Africa</option>
                      <option>Egypt</option>
                      <option>Nigeria</option>
                      <option>Kenya</option>
                      <option>Morocco</option>
                      <option>Tunisia</option>
                      <option>Algeria</option>
                      <option>Ethiopia</option>
                      <option>Ghana</option>
                      <option>Cameroon</option>
                      <option>Botswana</option>
                      <option>Zimbabwe</option>
                      <option>Uganda</option>
                      <option>Argentina</option>
                      <option>Antigua and Barbuda</option>
                      <option>Bahamas</option>
                      <option>Barbados</option>
                      <option>Belize</option>
                      <option>Canada</option>
                      <option>Costa Rica</option>
                      <option>Cuba</option>
                      <option>Dominica</option>
                      <option>Dominican Republic</option>
                      <option>El Salvador</option>
                      <option>Grenada</option>
                      <option>Guatemala</option>
                      <option>Haiti</option>
                      <option>Honduras</option>
                      <option>Jamaica</option>
                      <option>Mexico</option>
                      <option>Nicaragua</option>
                      <option>Panama</option>
                      <option>Saint Kitts and Nevis</option>
                      <option>Saint Lucia</option>
                      <option>Saint Vincent and the Grenadines</option>
                      <option>Trinidad and Tobago</option>
                      <option>United States</option>
                      <option>Afghanistan</option>
                      <option>Armenia</option>
                      <option>Azerbaijan</option>
                      <option>Bahrain</option>
                      <option>Bangladesh</option>
                      <option>Bhutan</option>
                      <option>Brunei</option>
                      <option>Cambodia</option>
                      <option>China</option>
                      <option>Cyprus</option>
                      <option>Georgia</option>
                      <option>India</option>
                      <option>Indonesia</option>
                      <option>Iran</option>
                      <option>Iraq</option>
                      <option>Israel</option>
                      <option>Japan</option>
                      <option>Jordan</option>
                      <option>Kazakhstan</option>
                      <option>Kuwait</option>
                      <option>Kyrgyzstan</option>
                      <option>Laos</option>

                    </select>
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="PostalCode"> ZIP/Post Code </label>

                    <input
                      type="text"
                      id="PostalCode"
                      placeholder="ZIP/Post Code"
                      className="relative w-full rounded-b-md border-gray-200 focus:z-10 sm:text-sm"
                    />
                  </div>
                </div>
              </fieldset>

              <div className="col-span-6">
                <button
                  className="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg"
                >
                  Pay Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

  )
}