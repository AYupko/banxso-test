type Thrust = {
  kN: number;
  lbf: number;
};

type Thruster = {
  type: string;
  amount: number;
  pods: number;
  fuel_1: string;
  fuel_2: string;
  isp: number;
  thrust: Thrust;
};

type HeatShield = {
  material: string;
  size_meters: number;
  temp_degrees: number;
  dev_partner: string;
};

type PayloadMass = {
  kg: number;
  lb: number;
};

type PayloadVolume = {
  cubic_meters: number;
  cubic_feet: number;
};

type PressurizedCapsule = {
  payload_volume: PayloadVolume;
};

type TrunkCargo = {
  solar_array: number;
  unpressurized_cargo: boolean;
};

type Trunk = {
  trunk_volume: PayloadVolume;
  cargo: TrunkCargo;
};

type Dimensions = {
  meters: number;
  feet: number;
};

export type Rocket = {
  heat_shield: HeatShield;
  launch_payload_mass: PayloadMass;
  launch_payload_vol: PayloadVolume;
  return_payload_mass: PayloadMass;
  return_payload_vol: PayloadVolume;
  pressurized_capsule: PressurizedCapsule;
  trunk: Trunk;
  height_w_trunk: Dimensions;
  diameter: Dimensions;
  first_flight: string;
  flickr_images: string[];
  name: string;
  type: string;
  active: boolean;
  crew_capacity: number;
  sidewall_angle_deg: number;
  orbit_duration_yr: number;
  dry_mass_kg: number;
  dry_mass_lb: number;
  thrusters: Thruster[];
  wikipedia: string;
  description: string;
  id: string;
};

export type TechParam =  {
  title: string;
  value1: string;
  value2: string;
}