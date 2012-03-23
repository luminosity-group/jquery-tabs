[true, false].forEach(function(animation_enabled) {
    describe('tabs with animation ' + (animation_enabled ? 'enabled' : 'disabled'), function() {
        beforeEach(function() {
            loadFixtures('tabs.html')
            $('.tabs').tabs({ animate: animation_enabled });
        });
        
        afterEach(function() {
            window.location.hash = '';
        });

        it('sets the .active class on the first nav item', function() {
            var item = $('.tabs_nav li:first')
            expect(item).toHaveClass('active');
            expect(item).toBeVisible();
        });

        it('sets the .active class on the first content item', function() {
            var item = $('.tabs_content > div:first')
            expect(item).toHaveClass('active');
            expect(item).toBeVisible();
        });

        describe('clicking on a tab', function() {
            beforeEach(function() {
                $('.tabs_nav li:nth-child(2)').trigger('click');
            });

            it('sets the .active class on the nav item that was clicked', function() {
                var item = $('.tabs_nav li:nth-child(2)');
                expect(item).toHaveClass('active');
                expect($('.tabs_nav li:nth-child(1)')).not.toHaveClass('.active');
            });

            it('sets the .active class on the content item for the selected nav item', function() {
                var item = $('.tabs_content > div:nth-child(2)');
                expect(item).toHaveClass('active');
                expect($('.tabs_content > div:nth-child(1)')).not.toHaveClass('active');
            });

            it('adds the hash to window.location.hash', function() {
                var hash = window.location.hash;
                expect(hash).toEqual('#tab-tab2');
            });
        });

        describe('page load with a hash', function() {
            it('sets the .active class on the nav item specified in the url', function() {
                window.location.hash = '#tab-tab2';
                $('.tabs').tabs();
                var item = $('.tabs_nav li:nth-child(2)');
                expect(item).toHaveClass('active');
            });
        });
    });
});
