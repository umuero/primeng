import { Code } from '@/domain/code';
import { Component } from '@angular/core';

@Component({
    selector: 'toolbar-accessibility-doc',
    standalone: false,
    template: ` <div>
        <app-docsectiontext>
            <h3>Screen Reader</h3>
            <p>
                Toolbar uses <i>toolbar</i> role for the root element, <i>aria-orientation</i> is not included as it defaults to <i>horizontal</i>. Any valid attribute is passed to the root element so you may add additional properties like
                <i>aria-labelledby</i> and <i>aria-labelled</i> to define the element if required.
            </p>
            <app-code [code]="code" [hideToggleCode]="true"></app-code>
            <h3>Keyboard Support</h3>
            <p>Component does not include any interactive elements. Arbitrary content can be placed with templating and elements like buttons inside should follow the page tab sequence.</p>
        </app-docsectiontext>
    </div>`
})
export class AccessibilityDoc {
    code: Code = {
        html: `<p-toolbar aria-label="Actions">
    Content
</p-toolbar>`
    };
}
