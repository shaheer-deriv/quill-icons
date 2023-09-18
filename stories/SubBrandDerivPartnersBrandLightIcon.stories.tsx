import type { Meta, StoryObj } from '@storybook/react';

import { SubBrandDerivPartnersBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/SubBrandDerivPartnersBrandLightIcon',
  component: SubBrandDerivPartnersBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SubBrandDerivPartnersBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof SubBrandDerivPartnersBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
