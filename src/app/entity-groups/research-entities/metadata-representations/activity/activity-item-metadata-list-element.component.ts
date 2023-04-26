import { Component } from '@angular/core';
import { metadataRepresentationComponent } from '../../../../shared/metadata-representation/metadata-representation.decorator';
import { MetadataRepresentationType } from '../../../../core/shared/metadata-representation/metadata-representation.model';
import { ItemMetadataRepresentationListElementComponent } from '../../../../shared/object-list/metadata-representation-list-element/item/item-metadata-representation-list-element.component';

@metadataRepresentationComponent('Activity', MetadataRepresentationType.Item)
@Component({
  selector: 'ds-activity-item-metadata-list-element',
  templateUrl: './activity-item-metadata-list-element.component.html'
})
/**
 * The component for displaying an item of the type OrgUnit as a metadata field
 */
export class ActivityItemMetadataListElementComponent extends ItemMetadataRepresentationListElementComponent {
}