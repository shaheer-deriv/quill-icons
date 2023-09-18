import type { Meta, StoryObj } from '@storybook/react';

import { PartnersProductSmarttraderWhiteLogoIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PartnersProductSmarttraderWhiteLogoIcon',
  component: PartnersProductSmarttraderWhiteLogoIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PartnersProductSmarttraderWhiteLogoIcon>;

export default meta;

type Story = StoryObj<typeof PartnersProductSmarttraderWhiteLogoIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
