interface TObjectData {
  id: number;
  name: string;
  type: string;
}
export interface TMainGroup extends TObjectData {
  subGroup: TSubGroup[];
}

export interface TSubGroup extends TObjectData {
  thirdGroup: TThirdGroup[];
}

export type TThirdGroup = TObjectData;
