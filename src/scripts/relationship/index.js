/**
 * Created by wb-llw259548 on 2017/2/17.
 */
import relationshipMain from './main';

const relationship = {
    init() {
        this.initPage();
        this.initEvent();
        this.initComponent();
    },
    initPage() {
    },
    initEvent() {
    },
    initComponent() {
        relationshipMain.init();
    }
};

relationship.init();