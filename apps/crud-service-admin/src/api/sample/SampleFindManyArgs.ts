import { SampleWhereInput } from "./SampleWhereInput";
import { SampleOrderByInput } from "./SampleOrderByInput";

export type SampleFindManyArgs = {
  where?: SampleWhereInput;
  orderBy?: Array<SampleOrderByInput>;
  skip?: number;
  take?: number;
};
