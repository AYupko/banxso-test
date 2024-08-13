import { Rocket } from "../types/types";

export const getTechParams = (rocket: Rocket) => {
  const {
    height_w_trunk: { feet: heightFeet, meters: heightMeters },
    diameter: { feet: diameterFeet, meters: diameterMeters },
    pressurized_capsule: {
      payload_volume: { cubic_meters: payloadMeters, cubic_feet: payloadFeet },
    },
    trunk: { trunk_volume: { cubic_meters: trunkMeters, cubic_feet: trunkFeet }},
    launch_payload_mass: { kg: launchKg, lb: launchLb },
    return_payload_mass: { kg: returnKg, lb: returnLb },
  } = rocket;

  return [
    { title: "height", value1: `${heightMeters} m`, value2: `${heightFeet} ft` },
    { title: "diameter", value1: `${diameterMeters} m`, value2: `${diameterFeet} ft` },
    { title: "spacecraft volume", value1: `${payloadMeters} m³`, value2: `${payloadFeet} ft³` },
    { title: "trunk volume", value1: `${trunkMeters}m³`, value2: `${trunkFeet}m³`},
    { title: "launch payload mass", value1: `${launchKg} kg`, value2: `${launchLb} lbs` },
    { title: "return payload mass", value1: `${returnKg} kg`, value2: `${returnLb} lbs` },
  ];
};
