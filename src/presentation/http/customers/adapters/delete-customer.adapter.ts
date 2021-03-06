import { Customer } from 'src/core/customers/customer';
import { IBasePresentationAdapter } from '../../base-presentation.adapter';
import { DeleteCustomerDto } from '../delete-customer.dto';
export class DeleteCustomerAdapter
  implements IBasePresentationAdapter<Customer, DeleteCustomerDto.Response>
{
  public modelToResponse(customer: Customer): DeleteCustomerDto.Response {
    return {
      id: customer.id,
      user_id: customer.user_id,
      identification: customer.identification,
      identification_type: customer.identification_type,
      created_at: customer.created_at,
      updated_at: customer.updated_at,
      deleted_at: customer.deleted_at
    };
  }
  public requestToModel() {
    return null;
  }
}
